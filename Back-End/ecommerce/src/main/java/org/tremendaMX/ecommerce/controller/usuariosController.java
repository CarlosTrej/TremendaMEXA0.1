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
import org.tremendaMX.ecommerce.usuariosservice;
import org.tremendaMX.ecommerce.model.usuarios;

@RestController
@RequestMapping("api/usuarios")
public class usuariosController {

	private final usuariosservice usuariosservice;

	@Autowired
	public usuariosController(usuariosservice usuariosservice) {
		this.usuariosservice = usuariosservice;
	}//usuariosController
	
	
	@GetMapping
	public List<usuarios> getAllusers(){
		return usuariosservice.getAllusers();
	}//getAllusers
	
	
	@GetMapping(path = "{idusuarios}")
	public usuarios getUser(@PathVariable("idusuarios") Long idusuarios) {
		return usuariosservice.getUser(idusuarios);
	}//getUser
	
	
	@DeleteMapping(path = "{idusuarios}")
	public void deleteUser(@PathVariable("idusuarios") Long idusuarios) {
		usuariosservice.deleteUser(idusuarios);
	}//deleteUser
	
	
	@PostMapping
	public void addUser(@RequestBody usuarios usuario) {
		usuariosservice.addUser(usuario);
	}//addUser
	
	
	@PutMapping(path = "{idusuarios}")
	public void updateUser(@PathVariable("idusuarios") Long idusuarios,
			@RequestParam(required = false) String nombre,
			@RequestParam(required = false) String apellido,
			@RequestParam(required = false) String correo,
			@RequestParam(required = false) String password,
			@RequestParam(required = false) String telefono) {
		usuariosservice.updateUser(idusuarios, nombre, apellido, correo, password, telefono);
		
	}//updateUser
	
	
}//usuariosController
