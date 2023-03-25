package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import bean.MyBean;
import bean.ViewBean;


public class MyDao {
	public boolean contact(MyBean mb) {
    	boolean flag=false;
    	System.out.println("Register verify...");
    	try {
    		Connection conn= DBConnection.getConnection();
    		PreparedStatement ps=conn.prepareStatement("insert into varsha values(?,?,?,?)");
    		ps.setString(1, mb.getName());
    		ps.setString(2, mb.getEmail());
    		ps.setString(3, mb.getSubject());
    		ps.setString(4, mb.getMsg());
    		ResultSet rs=ps.executeQuery();
    		if(rs.next()) {
    			flag=true;
    			return flag;
        		}
    		
    	}catch(Exception e) {e.printStackTrace();}
    	return flag;
    }
	


//view 

public List<ViewBean> getContactRecord() {
	ViewBean vb=null;
	List <ViewBean> list1= new ArrayList();
	System.out.println("Register verify....");
	try {
		Connection conn= DBConnection.getConnection();
		Statement stmt=conn.createStatement();
		ResultSet rs=stmt.executeQuery("select * from varsha");
		
		   while(rs.next()) {
    		vb=new ViewBean();
    		vb.setName(rs.getString(1));
    		vb.setEmail(rs.getString(2));
    		
    		vb.setSubject(rs.getString(3));
    		vb.setMsg(rs.getString(4));
    		list1.add(vb);
    		
   		}
   	}catch(Exception e) {e.printStackTrace();}
   	return list1;
}

}
