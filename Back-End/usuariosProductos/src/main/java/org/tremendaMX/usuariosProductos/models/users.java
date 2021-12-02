package org.tremendaMX.usuariosProductos.models;

public class users {
	
	private int id;
	private String nombre;
	private String apellido;
	private String correo;
	private String contrasena;
	private String telefono;
	
	public users(int id, String nombre, String apellido, String correo, String contrasena, String telefono) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.contrasena = contrasena;
		this.telefono = telefono;
	}//constructor
	
	public users() {}//constructor vacio

	public int getId() {
		return id;
	}//getId
	
	

	public void setId(int id) {
		this.id = id;
	}//setId

	public String getNombre() {
		return nombre;
	}//getNombre

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}//setNombre

	public String getApellido() {
		return apellido;
	}//getApellido

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}//etApellido

	public String getCorreo() {
		return correo;
	}//getCorreo

	public void setCorreo(String correo) {
		this.correo = correo;
	}//setCorreo

	public String getContrasena() {
		return contrasena;
	}//etContrasena

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}//setContrasena

	public String getTelefono() {
		return telefono;
	}//getTelefono

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}//setTelefono
	
	
	
	

}//users
