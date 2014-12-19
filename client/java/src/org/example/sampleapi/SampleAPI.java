package org.example.sampleapi;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.entity.ContentType;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


public class SampleAPI {

	/**
	 * URL of the API server.
	 */
	public static final String API_URL = "http://localhost:8000/api/v1/";

	/**
	 * API access token.
	 */
	private static final String ACCESS_TOKEN = "33faa76c33b5f6fdef888fda0ca379a5deecc739";

	
	/**
	 * Get a list with all locations.
	 * 
	 * @return List with locations
	 */
	public List<Location> getLocations() {

		List<Location> locationList = new ArrayList<Location>();
		try {
			String result = ApacheHttpClient.httpGet(API_URL + Location.ressourceName + "/", "application/json", "OAuth " + ACCESS_TOKEN);

			JSONArray ar = new JSONObject(result).getJSONArray("objects");
			Gson gsonBuilder = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss").create();
			for(int i=0;i<ar.length();i++){
				Location ink = gsonBuilder.fromJson(ar.get(i).toString(), Location.class);
				locationList.add(ink);
			}		
		} catch (RuntimeException | JSONException e) {
			System.err.println(e.getClass().getName() + " " + e.getMessage());
		}
		
		return locationList;
	}
	
	public boolean postLocation(Location location) {
		try {
			String stringEntity = new Gson().toJson(location);
			return ApacheHttpClient.httpPost(API_URL + Location.ressourceName + "/", "OAuth " + ACCESS_TOKEN, stringEntity, ContentType.APPLICATION_JSON);
		} catch (RuntimeException e) {
			System.err.println(e.getClass().getName() + " " + e.getMessage());
		}

		return false;
	}
}
