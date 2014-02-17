package org.example.sampleapi;

public class Location {

	public static final String ressourceName = "location";

	private float latitude;
	private float longitude;
	private float altitude;
	private int user_id;

	public Location(float latitude, float longitude, float altitude, int user_id) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.altitude = altitude;
		this.user_id = user_id;
	}
	
	public float getLatitude() {
		return latitude;
	}

	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}

	public float getLongitude() {
		return longitude;
	}

	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}

	public float getAltitude() {
		return altitude;
	}

	public void setAltitude(float altitude) {
		this.altitude = altitude;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "Location [latitude=" + latitude + ", longitude=" + longitude
				+ ", altitude=" + altitude + ", user_id=" + user_id + "]";
	}	


}
