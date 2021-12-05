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
import org.tremendaMX.ecommerce.categoriasService;
import org.tremendaMX.ecommerce.model.categorias;

@RestController
@RequestMapping("api/categorias")
public class categoriasController {

	private final categoriasService categoriasService;

	@Autowired
	public categoriasController(categoriasService categoriasService) {
		this.categoriasService = categoriasService;
	}//Constructor
	
	@GetMapping
	public List<categorias> getAllcategories(){
		return categoriasService.getAllcategories();
	}//getAllcategories
	
	@GetMapping(path = "{id}")
	public categorias getCategory(@PathVariable("id") Long id) {
		return categoriasService.getCategory(id);
	}//getCategory
	
	@PostMapping
	public void addCategory(@RequestBody categorias categoria) {
		categoriasService.addCategory(categoria);
	}//addCategory
	
	@PutMapping(path = "{id}")
	public void updateCategory(@PathVariable("id") Long id,
			@RequestParam(required = false) String nombre,
			@RequestParam(required = false) String descripcion) {
		categoriasService.updateCategory(id, nombre, descripcion);
	}//updateCategory
	
	@DeleteMapping(path = "{id}")
	public void deleteCategory(@PathVariable("id") Long id) {
		categoriasService.deleteCategory(id);
	}//deleteCategory
	
	
	
}//categoriasController
