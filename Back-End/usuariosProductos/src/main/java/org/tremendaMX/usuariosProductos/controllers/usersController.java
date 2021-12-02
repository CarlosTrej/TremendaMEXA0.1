package org.tremendaMX.usuariosProductos.controllers;

import java.util.List;

import org.tremendaMX.usuariosProductos.userService;
import org.tremendaMX.usuariosProductos.models.*;

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


@RestController
@RequestMapping("/api/users")

public class usersController {
	
	
	
		private final userService _usersService;
		
		
		@Autowired
		public usersController(userService _usersService) {
			this._usersService = _usersService;
		}//constructor
		
		
		@GetMapping(path = "{userId}")
		public users getUser(@PathVariable("userId") Long userId){
			return _usersService.getUser(userId);
		}//getUsers
		
		

		@GetMapping
		public List<users> getUsers(){
			return _usersService.getALLUsers();
		}//getUsers
		
		
		@DeleteMapping(path = "{userId}")
		public void deleteUser(@PathVariable("userId") Long userId) {
			_usersService.deleteUser(userId);
		}//deleteUser
		
		
		@PutMapping(path = "{userId}")
		public void updateUser(@PathVariable("userId") Long userId, 
				@RequestParam(required=true) String originalpassword, 
				@RequestParam(required=true) String newpassword) {
			_usersService.updateUser(userId, originalpassword, newpassword);
		}//updateUser
		
		
		@PostMapping
		public void addUser(@RequestBody users user) {
			_usersService.addUser(user);
		}//addUser
		
}//usersController


