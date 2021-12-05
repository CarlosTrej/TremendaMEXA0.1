package org.tremendaMX.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name = "productos")
public class productos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", unique = true, nullable = false)
	private Long id;
	private String nombre;
	private double precio;
	private String descripcion;
	private String presentacion;
	private String img;
	private Long categorias_idcategorias;
	private Long marca_idmarca;
	
	public productos(Long id, String nombre, double precio, String descripcion, String presentacion, String img,
			Long categorias_idcategorias, Long marca_idmarca) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
		this.presentacion = presentacion;
		this.img = img;
		this.categorias_idcategorias = categorias_idcategorias;
		this.marca_idmarca = marca_idmarca;
	}//Contructor_productos

	public productos() {}//Contructor_para_ingresar_nuevo_producto

	public Long getId() {
		return id;
	}//getId

	public void setId(Long id) {
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

	public String getDescripcion() {
		return descripcion;
	}//getDescripcion

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}//setDescripcion

	public String getPresentacion() {
		return presentacion;
	}//getPresentacion

	public void setPresentacion(String presentacion) {
		this.presentacion = presentacion;
	}//setPresentacion

	public String getImg() {
		return img;
	}//getImg

	public void setImg(String img) {
		this.img = img;
	}//setImg

	public Long getCategorias_idcategorias() {
		return categorias_idcategorias;
	}//getCategorias_idcategorias

	public void setCategorias_idcategorias(Long categorias_idcategorias) {
		this.categorias_idcategorias = categorias_idcategorias;
	}//setCategorias_idcategorias

	public Long getMarca_idmarca() {
		return marca_idmarca;
	}//getMarca_idmarca

	public void setMarca_idmarca(Long marca_idmarca) {
		this.marca_idmarca = marca_idmarca;
	}//setMarca_idmarca
	
	
	
	
	
	
	
	
	
	
	

}//productos
