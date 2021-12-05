package org.tremendaMX.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.tremendaMX.ecommerce.pedidosService;
import org.tremendaMX.ecommerce.model.pedidos;

@RestController
@RequestMapping("api/pedidos")
public class pedidosController {
	
	private final pedidosService pedidosService;

	@Autowired
	public pedidosController(pedidosService pedidosService) {
		this.pedidosService = pedidosService;
	}//pedidosController
	
	
	@GetMapping
	public List<pedidos> getAllorders(){
		return pedidosService.getAllorders();
	}//getAllorders
	
	@GetMapping(path = "{idpedidos}")
	public pedidos getOrder(@PathVariable("idpedidos") Long idpedidos) {
		return pedidosService.getOrder(idpedidos);
	}//getOrder
	
	
	@DeleteMapping(path = "{idpedidos}")
	public void deleteOrder(@PathVariable("idpedidos") Long idpedidos) {
		pedidosService.deleteOrder(idpedidos);
	}//deleteOrder
	
	
	@PostMapping
	public void addOrder (@RequestBody pedidos pedido) {
		pedidosService.addOrder(pedido);
	}//addOrder
	
	
	@PutMapping(path = "{idpedidos}")
	public void updateOrder(@PathVariable("idpedidos") Long idpedidos,
			@RequestParam(required = false) String nombre_usuario,
			@RequestParam(required = false) String producto,
			@RequestParam(required = false) Double precio,
			@RequestParam(required = false) Double total,
			@RequestParam(required = false) Long usuarios_idusuarios) {
		
		pedidosService.updateOrder(idpedidos, nombre_usuario, producto, precio, total, usuarios_idusuarios);
	}//updateOrder
	
}//pedidosController
