package org.tremendaMX.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.tremendaMX.utils.SHAUtil;

@Entity
@Table(name = "usuarios")
public class usuarios {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idusuarios", unique = true, nullable = false)
	private Long idusuarios;
	private String nombre;
	private String apellido;
	private String correo;
	private String password;
	private String telefono;
	
	public usuarios(Long idusuarios, String nombre, String apellido, String correo, String password, String telefono) {
		super();
		this.idusuarios = idusuarios;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.setPassword(password);
		this.telefono = telefono;
	}//Constructor

	public usuarios() {} //ConstructorVacío_para agregar_nuevos_usuarios

	public Long getIdusuarios() {
		return idusuarios;
	}//getIdusuarios

	public void setIdusuarios(Long idusuarios) {
		this.idusuarios = idusuarios;
	}//setIdusuarios

	public String getNombre() {
		return nombre;
	}//getNombre

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}//setNombre

	public String getApellido() {
		return apellido;
	}//getNombre

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}//getApellido

	public String getCorreo() {
		return correo;
	}//getCorreo

	public void setCorreo(String correo) {
		this.correo = correo;
	}//setCorreo

	public String getPassword() {
		return password;
	}//getPassword

	public void setPassword(String password) {
		this.password = SHAUtil.createHash(password);
	}//setPassword

	public String getTelefono() {
		return telefono;
	}//getTelefono

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}//setTelefono
	
	 public void setClearPassword(String password) {
		  this.password=password;
	  }//setClearPassword
	
	


}//usuarios
