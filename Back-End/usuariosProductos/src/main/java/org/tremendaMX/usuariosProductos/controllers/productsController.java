package org.tremendaMX.usuariosProductos.controllers;

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
import org.tremendaMX.usuariosProductos.productsServices;
import org.tremendaMX.usuariosProductos.models.products;


@RestController
@RequestMapping("/api/products")
public class productsController {
	
	

	private final productsServices _productsService;
	
	@Autowired
	public productsController(productsServices _productsService) {
		this._productsService = _productsService;
	}//productsController
	
	
	@GetMapping(path = "{productId}")
	public products getProduct(@PathVariable("productId") Long productId){
		return _productsService.getProduct(productId);
	}//getUsers
	
	
	@GetMapping
	public List<products> getProducts(){
		return _productsService.getAllProducts();
	}//getUsers
	
	
	@DeleteMapping(path = "{productId}")
	public void deleteProduct(@PathVariable("productId") Long productId) {
		_productsService.deleteProduct(productId);
	}//deleteUser
	
	
	@PostMapping
	public void addProduct(@RequestBody products product) {
		_productsService.addProduct(product);
	}//addUser
	
	@PutMapping(path = "{productId}")
	public void updateProduct(@PathVariable("productId") Long productId,
			@RequestParam(required = false) String nombre,
			@RequestParam(required = false) Double precio,
			@RequestParam(required = false) String presentacion,
			@RequestParam(required = false) String descripcion,
			@RequestParam(required = false)String imagenURL) {
		_productsService.updateProduct(productId, 
				nombre, precio, presentacion, 
				descripcion, imagenURL);
	}//updateProduct
	
	
	
	
	
	
	

}//productsController
