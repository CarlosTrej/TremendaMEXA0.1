package org.tremendaMX.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.tremendaMX.ecommerce.productosService;
import org.tremendaMX.ecommerce.model.productos;

@RestController
@RequestMapping("api/productos")
@CrossOrigin("*")
public class productosController {
	
	private final productosService productosService;
	
	@Autowired
	public productosController(productosService productosService) {
		this.productosService = productosService;
	}//Constructor
	
	
	@GetMapping
	public List<productos> getAllProductos(){
		return productosService.getAllProductos();
	}//getAllproducts
	
	@GetMapping(path = "{id}")
	public productos getProductos(@PathVariable("id") Long id) {
		return productosService.getProductos(id);
	}//getProducts
	
	@DeleteMapping(path = "{id}")
	public void deleteProductos(@PathVariable("id") Long id) {
		productosService.deleteProductos(id);
	}//deleteProducts
	
	
	@PostMapping
	public void addProductos(@RequestBody productos producto) {
		productosService.addProductos(producto);
	}//addProducts
	
	
	@PutMapping(path = "{id}")
	public void updateProductos(@PathVariable("id") Long id,
			@RequestParam(required = false) String nombre,
			@RequestParam(required = false) double precio,
			@RequestParam(required = false) String descripcion,
			@RequestParam(required = false) String presentacion,
			@RequestParam(required = false) String img,
			@RequestParam(required = false) Long categorias_idcategorias,
			@RequestParam(required = false) Long marca_idmarca)
			{
		productosService.updateProductos(id,nombre,precio,descripcion,presentacion,img,categorias_idcategorias,marca_idmarca);
	}//updateProducts
	

}//productosController
