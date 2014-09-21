package com.test.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class MyReceiver extends BroadcastReceiver {
	
	private static MyReceiver instance;
	
	// text that will be read by Unity
	public static String text = "";
	
	// Triggered when an Intent is catched
	@Override
	public void onReceive(Context context, Intent intent) {
		// We get the data the Intent has
		String sentIntent = intent.getStringExtra(Intent.EXTRA_TEXT);
		if (sentIntent != null) {
			// We assigned it to our static variable
			text = sentIntent;
		}
		
		Log.d("charith", "seee:"+sentIntent);
	}

	// static method to create our receiver object, it'll be Unity that will create ou receiver object (singleton)
	public static void createInstance()
	{
		if(instance ==  null)
		{
				Log.d("charith", "Re:---------3333");
			instance = new MyReceiver();
		}
		
	}
}