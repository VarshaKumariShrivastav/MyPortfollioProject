package dao;

import java.sql.*;

public class DBConnection {
	static Connection conn=null;
	public static Connection getConnection(){
		System.out.println("Get Connection...");
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","varshaav");
			
		}catch(Exception e){e.printStackTrace();}
		return conn;
	}
   public static void main(String []arg) {
	   System.out.println("Connection..."+DBConnection.getConnection());
   }
}
