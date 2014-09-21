package com.example.btbeaconcollector;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import android.app.Service;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothManager;
import android.bluetooth.BluetoothAdapter.LeScanCallback;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.util.Log;

public class MyService extends Service {

	private LeScanCallback mLeScanCallback;
	private BluetoothAdapter mBluetoothAdapter;

	public static String BTData = "";
	public static ArrayList<BTBeacon> BTBeaconArray = new ArrayList<BTBeacon>();
	
	
	
	private final Handler handler = new Handler();

	private int numIntent;

	// It's the code we want our Handler to execute to send data
	private Runnable sendData = new Runnable() {
		// the specific method which will be executed by the handler
		public void run() {
			numIntent++;

			// sendIntent is the object that will be broadcast outside our app
			Intent sendIntent = new Intent();

			// We add flags for example to work from background
			sendIntent.addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION
					| Intent.FLAG_FROM_BACKGROUND
					| Intent.FLAG_INCLUDE_STOPPED_PACKAGES);

			// SetAction uses a string which is an important name as it
			// identifies the sender of the itent and that we will give to the
			// receiver to know what to listen.
			// By convention, it's suggested to use the current package name
			sendIntent.setAction("com.test.sendintent.IntentToUnity");

			// Here we fill the Intent with our data, here just a string with an
			// incremented number in it.
			
			
			//String s = "01 33 44 55 66 01 #"+50+"#1.4142135623730951";
			//s=generateString();
			
			sendIntent.putExtra(Intent.EXTRA_TEXT, BTData);
			// And here it goes ! our message is send to any other app that want
			// to listen to it.
			sendBroadcast(sendIntent);
			//Log.d("charith", "Intent " + numIntent);

			// In our case we run this method each second with postDelayed
			handler.removeCallbacks(this);
			handler.postDelayed(this, 1000);
		}

		private String generateString() {
			// TODO Auto-generated method stub
			return null;
		}
		
		
		
		
	};

	// When service is started
	@Override
	public void onStart(Intent intent, int startid) {
		numIntent = 0;
		// We first start the Handler
		handler.removeCallbacks(sendData);
		handler.postDelayed(sendData, 1000);
	}

	@Override
	public int onStartCommand(Intent intent, int flags, int startId) {
		initBluetooth();
		Log.d("charith", "Intent " );
		numIntent = 0;
		// We first start the Handler
		handler.removeCallbacks(sendData);
		handler.postDelayed(sendData, 1000);
		
		return START_STICKY;
	}

	@Override
	public IBinder onBind(Intent intent) {
		// TODO Auto-generated method stub
		return null;
	}
	
	private String composeBTData() {
		BTData = "";
		for (int i = 0; i < BTBeaconArray.size(); i++) {
			BTData = BTData + BTBeaconArray.get(i).getId() + "#"
					+ BTBeaconArray.get(i).getRssi() + "#"
					+ BTBeaconArray.get(i).getSd();
			if (i < BTBeaconArray.size() - 1) {
				BTData = BTData + "#";

			}
		}
		// BTBeaconArray.clear();
		return BTData;
	}
	
	
	public void initBluetooth() {
		Log.d("charith2", "initBluetooth");
		// Bluetooth SETUP
		final BluetoothManager manager = (BluetoothManager) getSystemService(BLUETOOTH_SERVICE);
		mBluetoothAdapter = manager.getAdapter();
		Log.d("charith2", "mBluetoothAdapter");
		mLeScanCallback = new LeScanCallback() {

			@Override
			public void onLeScan(final BluetoothDevice device, final int rssi,
					final byte[] scanRecord) {
				Log.d("charith2", "onLeScan");
				// code to be executed when a signal is heard
				
				
				new Thread(new  Runnable() {
					public void run() {
						
						Log.d("charith2", "22222");

						String payload = Arrays.toString(scanRecord).substring(
								78, 80);
						Integer total = 0;
						Integer average = 0;
						Integer sd = 0;
						DecimalFormat dec = new DecimalFormat("#.00");

						final StringBuilder stringBuilder = new StringBuilder(
								scanRecord.length);
						for (byte byteChar : scanRecord)
							stringBuilder.append(String.format("%02X ",
									byteChar));

						String id = stringBuilder.substring(51, 69);
						

						Log.d("charith2", id);

						BTBeacon vBTBeacon = getBTBeacon(id);
						vBTBeacon.setId(stringBuilder.substring(51, 69));
						vBTBeacon.setRssi(Integer.toString(rssi));
						vBTBeacon.setSd(calculateSD(rssi));

						composeBTData();

						Log.d("charith2", BTData);

					}

					private BTBeacon getBTBeacon(String id) {
						boolean isOnList = false;
						int index = 0;
						for (int i = 0; i < BTBeaconArray.size(); i++) {

							// Log.d("charith", BTBeaconArray.get(i).getId());
							// Log.d("charith", id);

							if (BTBeaconArray.get(i).getId().contains(id)) {
								isOnList = true;
								index = i;
							}

						}

						if (isOnList) {
							return BTBeaconArray.get(index);
						} else {
							BTBeacon vBTBeacon = new BTBeacon();
							BTBeaconArray.add(vBTBeacon);
							return vBTBeacon;
						}

					}

					private String calculateSD(int rssi) {

						List<Integer> list = new ArrayList<Integer>();
						Integer total = 0;
						Integer average = 0;
						Integer sd = 0;
						Double standardDeviation = 0.0;
						DecimalFormat dec = new DecimalFormat("#.00");

						System.out.println("adding new element");
						System.out.println(list);
						list.add(rssi);
						if (list.size() > 50) {

							for (Integer x : list) {
								total += x;
							}

							average = total / list.size();
							for (Integer x : list) {
								sd += (x - average) * (x - average);
							}
							;

							standardDeviation = Math.sqrt(sd / list.size());
							list.remove(0);
							total = 0;
							sd = 0;
						}
						return standardDeviation.toString();
					}

				}).start();
				
			}

		};

		mBluetoothAdapter.startLeScan(mLeScanCallback);
		Log.d("MainActivityForTommy", "Scan was started");

	}

}