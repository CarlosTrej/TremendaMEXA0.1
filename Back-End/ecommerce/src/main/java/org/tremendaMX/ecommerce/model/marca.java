package org.tremendaMX.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "marca")
public class marca {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id" , unique = true, nullable = false)
	private Long idMarca;
	private String nombre;
	
	public marca(Long idMarca, String nombre) {
		super();
		this.idMarca = idMarca;
		this.nombre = nombre;
	}//ContructorMarca

	public marca() {} //ContructorParaAgregarNuevaMarca

	public Long getIdMarca() {
		return idMarca;
	}//getIdMarca

	public void setIdMarca(Long idMarca) {
		this.idMarca = idMarca;
	}//setIdMarca

	public String getNombre() {
		return nombre;
	}//getNombre

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}//setNombre


}//marca
