package com.library.LibraryManagement2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class App 
{
	private static ApplicationContext context;

	public static void main(String[] args) {
        context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService service = (BookService) context.getBean("bookService");
        service.printBook();
    }
}
