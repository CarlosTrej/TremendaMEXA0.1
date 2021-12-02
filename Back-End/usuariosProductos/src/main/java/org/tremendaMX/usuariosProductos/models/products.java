package org.tremendaMX.usuariosProductos.models;

public class products {
	
	private int id;
	private String nombre;
	private double precio; 
	private String presentacion;
	private String descripcion;
	private String imagenURL;
	
	public products(int id, String nombre, double precio, String presentacion, String descripcion, String imagenURL) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.presentacion = presentacion;
		this.descripcion = descripcion;
		this.imagenURL = imagenURL;
	}//constructor

	public products() {}//constructor_vacio

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

	public double getPrecio() {
		return precio;
	}//getPrecio

	public void setPrecio(double precio) {
		this.precio = precio;
	}//setPrecio

	public String getPresentacion() {
		return presentacion;
	}//getPresentacion

	public void setPresentacion(String presentacion) {
		this.presentacion = presentacion;
	}//setPresentacion

	public String getDescripcion() {
		return descripcion;
	}//getDescripcion

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}//setDescripcion

	public String getImagenURL() {
		return imagenURL;
	}//getImagenURL(

	public void setImagenURL(String imagenURL) {
		this.imagenURL = imagenURL;
	}//setImagenURL
	
	
	
	
	
	

}//products
