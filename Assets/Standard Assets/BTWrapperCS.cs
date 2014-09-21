/////////////////////////////////////////////////////////////////////////                                                                     //
// This Wrapper has been created to make the communication between     //
// Native Android Code and Java Script. This Wrapper retrieves a String//
// and pass it to the JavaScript layer for futher processing.          //
// It retrieves data using a Jar file that handles comunication with   //
// Bluetooth Beacons..... Created by Charith Perera on 08-05-2014      //
/////////////////////////////////////////////////////////////////////////

//WARNING: DO NOT CHANGE BUNDLE IDENTIFIER NAME
using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;
using System;

public class BTWrapperCS : MonoBehaviour
{
		public static string BTBeaconInformationCS = "null";
		public static AndroidJavaClass pluginTutorialActivityJavaClass;
	//	public static AndroidJavaObject activity;
		//public static AndroidJavaObject jo;


	AndroidJavaClass jc;
	string javaMessage = "";

		void Start ()
		{
		// Acces the android java receiver we made
		//jc = new AndroidJavaClass("com.test.unitycatchintent.MyReceiver");
	//	jc = new AndroidJavaClass("com.test.app.MyReceiver");
		// We call our java class function to create our MyReceiver java object
	//	jc.CallStatic("createInstance");   


				//AndroidJNI.AttachCurrentThread ();
				//pluginTutorialActivityJavaClass = new AndroidJavaClass ("com.test.app.PluginTest");

		AndroidJNI.AttachCurrentThread ();
		pluginTutorialActivityJavaClass = new AndroidJavaClass ("com.test.app.PluginTest");

				//activity = pluginTutorialActivityJavaClass.GetStatic<AndroidJavaObject> ("com.test.app.PluginTest");
				//	activity = new AndroidJavaObject("com.test.app.PluginTest");

		//		BTBeaconInformationCS = pluginTutorialActivityJavaClass.CallStatic<string> ("createInstance");
		
		//AndroidJavaObject activity = pluginTutorialActivityJavaClass.GetStatic<AndroidJavaObject> ("com.test.app.PluginTest");
				//jo = new AndroidJavaObject("com.test.app.PluginTest");
				//jo.Call("startDiscovery");

				//AndroidJavaObject javaClass = new AndroidJavaClass ("com.test.app.PluginTest");
				//AndroidJavaObject activity = javaClass.GetStatic<AndroidJavaObject>("ctx");
				//activity.Call("startDiscovery");

				//using (AndroidJavaClass javaClass = new AndroidJavaClass("com.test.app.PluginTest")) {
			
				//	using (AndroidJavaObject activity = pluginTutorialActivityJavaClass.GetStatic<AndroidJavaObject>("ctx")) {
				
				//	activity.Call ("startDiscovery");
				
				//	}
			
				//}
		//AndroidCallNonStatic ();
	//	BTBeaconInformationCS = pluginTutorialActivityJavaClass.CallStatic<string> ("StaticMethod");

	//	AndroidJavaClass jc = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
	//	AndroidJavaObject jo = jc.GetStatic<AndroidJavaObject>("currentActivity");
		//jo.Call("Launch");

	//	BTBeaconInformationCS = pluginTutorialActivityJavaClass.CallStatic<string> ("Launch", jo);
		//jc.CallStatic("Launch",jo);




		}

		void Update ()
		{

	//	javaMessage = jc.GetStatic<string>("text");
		pluginTutorialActivityJavaClass = new AndroidJavaClass ("com.test.app.MyReceiver");
		BTBeaconInformationCS = pluginTutorialActivityJavaClass.GetStatic<string>("text");
		Debug.Log ("BTWrapperCS: "+BTBeaconInformationCS);
		//AndroidCallNonStatic ();
		//	BTBeaconInformationCS = pluginTutorialActivityJavaClass.CallStatic<string> ("getNumber");
		//BTBeaconInformationCS = pluginTutorialActivityJavaClass.CallStatic<string> ("StaticMethod");
				//activity = pluginTutorialActivityJavaClass.GetStatic<AndroidJavaObject> ("com.test.app.PluginTest");
				//activity = new AndroidJavaObject("com.test.app.PluginTest");


				//jo = new AndroidJavaObject("com.test.app.PluginTest");
				//jo.Call("startDiscovery");

				//	AndroidJavaClass javaClass = new AndroidJavaClass ("com.test.app.PluginTest");
				//	AndroidJavaObject activity = javaClass.GetStatic<AndroidJavaObject>("ctx");
				//	activity.Call("startDiscovery");

				//using (AndroidJavaClass javaClass = new AndroidJavaClass("com.test.app.PluginTest")) {
			
				//using (AndroidJavaObject activity = pluginTutorialActivityJavaClass.GetStatic<AndroidJavaObject>("ctx")) {
				
				//	activity.Call ("startDiscovery");
				
				//}
			
				//}
		}

		//public void AndroidCallNonStatic ()
		//{
		//AndroidJNI.AttachCurrentThread ();

		//using (AndroidJavaClass javaClass = new AndroidJavaClass("com.test.app.PluginTest")) {
		//				using (AndroidJavaObject activity = javaClass.GetStatic<AndroidJavaObject>("mContext")) {
		//						activity.Call ("nonStaticMethod");
		//				}
		//		}
		//}

		public static string readBTValuesFromCSharp ()
		{
				return BTBeaconInformationCS;		
				//return "01 33 44 55 66 01 #-47#1.4142135623730951";
		}
}
