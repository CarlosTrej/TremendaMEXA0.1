package org.tremendaMX.ecommerce;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tremendaMX.ecommerce.model.usuarios;

@Service
public class usuariosservice {

	
	private final usuariosRepository usuariosRepository;

	
	@Autowired
	public usuariosservice(usuariosRepository usuariosRepository) {
		this.usuariosRepository = usuariosRepository;
	}//constructorUsuarios
	
	
	public List<usuarios> getAllusers() {
		return usuariosRepository.findAll();
	}//getAllusers
	
	
	public usuarios  getUser(Long idusuarios) {
		return usuariosRepository.findById(idusuarios)
				.orElseThrow(()-> new IllegalStateException
						("El Usuario con el id [" + idusuarios + "] no existe."));
	}//getUser
	
	
	public void deleteUser(Long idusuarios) {
		if(usuariosRepository.existsById(idusuarios)) {
			usuariosRepository.deleteById(idusuarios);
		}else {
			throw new IllegalStateException("El Usuario con el id [" + idusuarios + "] no existe. ");
		}//else
	}//deleteUser
	
	
	public void addUser (usuarios usuario) {
		Optional<usuarios> prodByName=usuariosRepository.findByName(usuario.getNombre());
		if( prodByName.isPresent()) {
			throw new IllegalStateException("El Usuario con el nombre [" + usuario.getNombre() + "] ya existe.");
		}//isPresent
		usuariosRepository.save(usuario);
	}//addUser
	
	
	@Transactional
	public void updateUser(Long idusuarios, String nombre, String apellido,
			String correo, String password, String telefono) {
		
		usuarios usuario = usuariosRepository.findById(idusuarios).
				orElseThrow(
						()->new IllegalStateException("El Usuario con el id [" + idusuarios + "] no existe."));
		
		
		//validamos_nombre
		if(nombre != null)
			if((!nombre.isEmpty()) && (!nombre.equals(usuario.getNombre()))) {
				usuario.setNombre(nombre);
			}//ifNombre
		
		
		//validamos_apellido
		if(apellido != null)
			if((!apellido.isEmpty()) && (!apellido.equals(usuario.getApellido()))) {
				usuario.setApellido(apellido);
			}//ifApellido
		
		//validamos_correo
		if(correo != null)
			if((!correo.isEmpty()) && (!correo.equals(usuario.getCorreo()))) {
				usuario.setCorreo(correo);
			}//ifCorreo
		
		
		//validamosPassword
		if(password != null)
			if((!password.isEmpty()) && (!password.equals(usuario.getPassword()))) {
				usuario.setPassword(password);
			}//ifPassword
		
		
		//validamosTelefono
		if(telefono != null)
			if((!telefono.isEmpty()) && (!telefono.equals(usuario.getTelefono()))) {
				usuario.setTelefono(telefono);
			}//ifTelefono
		
	}//updateUser
	
	
	
	
	
}//usuariosservice
