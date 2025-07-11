package com.cognizant.spring_learn2;

import java.text.SimpleDateFormat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.ParseException;
import java.util.Date;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@SpringBootApplication(exclude = { org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class })
public class SpringLearn2Application {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearn2Application.class);


	public static void main(String[] args) {
        System.out.println("SpringLearnApplication main() started...");
		SpringApplication.run(SpringLearn2Application.class, args);
		displayDate();
		displayCountry();
	}
	
	
	public static void displayDate() {
		LOGGER.info("START");
	    ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("dateformat.xml");
	    SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
	    try {
	        Date date = format.parse("31/12/2018");
	    	LOGGER.debug(date.toString());
	       // System.out.println(date);
	    } catch (ParseException e) {
	        e.printStackTrace();
	    }
	    
	    LOGGER.info("END");
	}
	
	public static void displayCountry() {
	    LOGGER.info("START");
	    ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
	    Country country = context.getBean("country", Country.class);
	    LOGGER.debug("Country : {}", country.toString());
	    LOGGER.info("END");
	}



}
