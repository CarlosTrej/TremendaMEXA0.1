package org.tremendaMX.ecommerce;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tremendaMX.ecommerce.model.pedidos;

@Service
public class pedidosService {

	private final pedidosRepository pedidosRepository;

	@Autowired
	public pedidosService(pedidosRepository pedidosRepository) {
		this.pedidosRepository = pedidosRepository;
	}//pedidosService
	
	public List<pedidos> getAllorders(){
		return pedidosRepository.findAll();
	}//getAllorders
	
	public pedidos getOrder( Long idpedidos) {
		return pedidosRepository.findById(idpedidos).
				orElseThrow(
						()->new IllegalStateException("El Pedido con el id [" + idpedidos + "] no existe."));
	}//getOrder
	
	public void addOrder( pedidos pedido) {
		Optional<pedidos> prodById = pedidosRepository.findById(pedido.getIdpedidos());
		if(prodById.isPresent()) {
			throw new IllegalStateException("El pedido con el id [" + pedido.getIdpedidos() + "] ya existe");
		}
		pedidosRepository.save(pedido);
	}//addOrder
	
	public void deleteOrder( Long idpedidos) {
		if(pedidosRepository.existsById(idpedidos)) {
			pedidosRepository.deleteById(idpedidos);
		}else {
			throw new IllegalStateException("El pedido con el id [" + idpedidos + "] no existe");
		}//else
	}//deleteOrder
	
	@Transactional
	public void updateOrder(Long idpedidos, String nombre_usuario,
			String producto, Double precio,Double total, Long usuarios_idusuarios) {
		pedidos pedido = pedidosRepository.findById(idpedidos).
				orElseThrow(
						()-> new IllegalStateException("El Pedido con el id [" + idpedidos + "] no existe."));
		
		//validaNombre_ususario
		if(nombre_usuario != null)
			if((!nombre_usuario.isEmpty()) && (!nombre_usuario.equals(pedido.getNombre_usuario()))) {
				pedido.setNombre_usuario(nombre_usuario);
			}//ifNombre_usuario
		
		//validaProductos
		if(producto != null)
			if((!producto.isEmpty()) && (!producto.equals(pedido.getProducto()))) {
				pedido.setProducto(producto);
			}//ifProducto
		
		//validaPrecio
		if(precio != null)
			if((precio > 0) && (precio != pedido.getPrecio())) {
				pedido.setPrecio(precio);
			}//ifPrecio
		
		//validaTotal
		if(total != null)
			if((total > 0) && (total != pedido.getTotal())) {
				pedido.setTotal(total);
			}//ifTotal
		
		//valida_FK_usuarios_idusuarios
		if(usuarios_idusuarios != null)
			if((usuarios_idusuarios >0) && (usuarios_idusuarios != pedido.getUsuarios_idusuarios())){
				pedido.setUsuarios_idusuarios(usuarios_idusuarios);
			}//ifUsuarios_idusuarios
		
	}//updateOrder
	
	
}//pedidosService
