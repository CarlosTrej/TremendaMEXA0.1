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
import org.tremendaMX.ecommerce.marcaService;
import org.tremendaMX.ecommerce.model.marca;

@RestController
@RequestMapping("api/marca")
@CrossOrigin("*")
public class marcaController {

	private final marcaService marcaService;

	
	@Autowired
	public marcaController(marcaService marcaService) {
		this.marcaService = marcaService;
	}//Constructor
	
	@GetMapping
	public List<marca> getAllbrands(){
		return marcaService.getAllbrands();
	}//getAllbrands
	
	@GetMapping(path = "{idMarca}")
	public marca getBrand(@PathVariable("idMarca") Long idMarca) {
		return marcaService.getBrand(idMarca);
	}//getBrand
	
	@PostMapping
	public void addBrand (@RequestBody marca marca) {
		marcaService.addBrand(marca);
	}//addBrand
	
	@PutMapping(path = "{idMarca}")
	public void updateBrand(@PathVariable("idMarca") Long idMarca,
			@RequestParam(required = false) String nombre){
		marcaService.updateBrand(idMarca, nombre);
	}//updateBrand
	
	@DeleteMapping(path = "{idMarca}")
	public void deleteBrand(@PathVariable("idMarca") Long idMarca){
		marcaService.deleteBrand(idMarca);
	}//deleteBrand
	
}//marcaRepository
