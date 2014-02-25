# Django sample server

## Java REST/JSON client with OAuth2

Simple REST/JSON client written in Java, which supports HTTP get and post requests (also with OAuth2 token).

### Used software

Used Java libraries

* [Apache HttpClient](http://hc.apache.org/downloads.cgi) (v.4.3.2)
* [Google Gson](https://code.google.com/p/google-gson/downloads) (v.2.2.4)
* [JSON-java](https://github.com/douglascrockford/JSON-java)

### Run

Necessary JARs in the Java build path

* gson/gson-2.2.4.jar
* httpcomponents-client/lib/
    * commons-logging-1.1.3.jar
    * httpclient-4.3.2.jar
    * httpcore-4.3.1.jar
* java-json/java-json.jar
    

[Apache Ant](http://ant.apache.org) is required to use the [build.xml](build.xm) to build and run the project:

```
# Print project help information
ant -p
# Clean, build and run the project
ant
# Compile only
ant compile
```

