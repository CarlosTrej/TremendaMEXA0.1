package org.tremendaMX.ecommerce.model;

public class LoginData {
	
	private final String email;
	private final String password;
	
	
	public LoginData(String email, String password) {
		this.email = email;
		this.password = password;
	}//LoginData


	public LoginData() {
		this.email="";
		this.password = "";
	}//LoginDataEmpty


	public String getEmail() {
		return email;
	}//getEmail


	public String getPassword() {
		return password;
	}//getPassword
	

}//LoginData
