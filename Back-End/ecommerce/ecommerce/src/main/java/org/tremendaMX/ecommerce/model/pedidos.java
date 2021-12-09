package org.tremendaMX.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pedidos")
public class pedidos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idpedidos", unique = true, nullable = false)
	private Long idpedidos;
	private String nombre_usuario;
	private String producto;
	private Double precio;
	private Double total;
	private Long usuarios_idusuarios;
	
	public pedidos(Long idpedidos, String nombre_usuario, String producto, Double precio, Double total,
			Long usuarios_idusuarios) {
		super();
		this.idpedidos = idpedidos;
		this.nombre_usuario = nombre_usuario;
		this.producto = producto;
		this.precio = precio;
		this.total = total;
		this.usuarios_idusuarios = usuarios_idusuarios;
	}//ContructorParaPedidos

	public pedidos() {}//ContructorParaAgregarPedidoNuevoDeUnUsusario.

	public Long getIdpedidos() {
		return idpedidos;
	}//getIdpedidos

	public void setIdpedidos(Long idpedidos) {
		this.idpedidos = idpedidos;
	}//setIdpedidos

	public String getNombre_usuario() {
		return nombre_usuario;
	}//getNombre_usuario

	public void setNombre_usuario(String nombre_usuario) {
		this.nombre_usuario = nombre_usuario;
	}//setNombre_usuario

	public String getProducto() {
		return producto;
	}//getProducto

	public void setProducto(String producto) {
		this.producto = producto;
	}//setProducto

	public double getPrecio() {
		return precio;
	}//getPrecio

	public void setPrecio(Double precio) {
		this.precio = precio;
	}//setPrecio

	public double getTotal() {
		return total;
	}//getTotal

	public void setTotal(Double total) {
		this.total = total;
	}//setTotal

	public Long getUsuarios_idusuarios() {
		return usuarios_idusuarios;
	}//getUsuarios_idusuarios

	public void setUsuarios_idusuarios(Long usuarios_idusuarios) {
		this.usuarios_idusuarios = usuarios_idusuarios;
	}//setUsuarios_idusuarios
	
}//pedidos
