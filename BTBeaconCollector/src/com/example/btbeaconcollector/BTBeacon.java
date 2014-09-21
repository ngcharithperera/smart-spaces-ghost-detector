package com.example.btbeaconcollector;

public class BTBeacon {
	String id;
	String rssi;
	String sd;

	public BTBeacon() {
		super();
	}

	public BTBeacon(String id, String rssi, String sd) {
		super();
		this.id = id;
		this.rssi = rssi;
		this.sd = sd;
	}

	public BTBeacon(String bTBeaconID) {
		this.id = bTBeaconID;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRssi() {
		return rssi;
	}

	public void setRssi(String rssi) {
		this.rssi = rssi;
	}

	public String getSd() {
		return sd;
	}

	public void setSd(String sd) {
		this.sd = sd;
	}
}
