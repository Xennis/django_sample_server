/*
 * Copyright (C) 2012 Square, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//package com.example.retrofit;

import java.util.Date;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import retrofit.RestAdapter;
import retrofit.converter.GsonConverter;
import retrofit.http.GET;
import retrofit.http.Path;

public class InvisibleInkClient {
  private static final String API_URL = "http://localhost:8000/api/v1/";

  static class Contributor {
//		private Date created;
		private int id;
//		private double location_lat;
//		private double location_lon;
//		private String resource_uri;
//		private String text;
//		private Date updated;
//		private double radius;

//		private Date expires;
//		private int user_id;
  }

  interface GitHub {
    @GET("/location/")
    List<Contributor> contributors();
  }

  public static void main(String... args) {
	  
	  Gson gson = new GsonBuilder()
	    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss")
	    .create();  
	  
    // Create a very simple REST adapter which points the GitHub API endpoint.
    RestAdapter restAdapter = new RestAdapter.Builder()
        .setEndpoint(API_URL)
        .setConverter(new GsonConverter(gson))
        .build();

    // Create an instance of our GitHub API interface.
    GitHub github = restAdapter.create(GitHub.class);

    // Fetch and print a list of the contributors to this library.
    List<Contributor> contributors = github.contributors();
    for (Contributor contributor : contributors) {
      System.out.println(contributor.id);
    }
  }
}