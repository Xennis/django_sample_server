package org.example.sampleapi;

import java.util.ArrayList;
import java.util.List;

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
	private static final String ACCESS_TOKEN = "f0d56e559cca7bc5c977e3c53f332f5967e722f8";

	
	/**
	 * Get a list with all locations.
	 * 
	 * @return List with locations
	 */
	public List<Location> getLocations() {

		List<Location> locationList = new ArrayList<Location>();
		try {
			String result = ApacheHttpClient.httpGet(API_URL + Location.ressourceName + "/", "OAuth " + ACCESS_TOKEN);

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
			return ApacheHttpClient.httpPost(API_URL + Location.ressourceName + "/", "OAuth " + ACCESS_TOKEN, stringEntity);
		} catch (RuntimeException e) {
			System.err.println(e.getClass().getName() + " " + e.getMessage());
		}

		return false;
	}
}
