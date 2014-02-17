import java.util.List;

import org.example.sampleapi.Location;
import org.example.sampleapi.SampleAPI;

public class Main {

	public static void main(String[] args) {
		SampleAPI sampleAPI = new SampleAPI();
		
		System.out.println("----------------- Get locations -----------------");
		List<Location> locationList = sampleAPI.getLocations();
		for (Location l : locationList) {
			System.out.println(l);
		}

		System.out.println("----------------- Post location -----------------");
		int sampleUser_id = 3;
		Location sampleLocation = new Location(55, 12, 110, sampleUser_id);
		boolean postResult = sampleAPI.postLocation(sampleLocation);
		if (postResult) {
			System.out.println("post successful: " + sampleLocation);
		} else {
			System.out.println("post failed: " + sampleLocation);			
		}
	}

}
