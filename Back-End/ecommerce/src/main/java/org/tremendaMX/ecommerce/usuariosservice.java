package org.tremendaMX.ecommerce;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tremendaMX.ecommerce.model.usuarios;
import org.tremendaMX.utils.SHAUtil;

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
		Optional<usuarios> prodByEmail=usuariosRepository.findByEmail(usuario.getCorreo());
		if( prodByEmail.isPresent()) {
			throw new IllegalStateException("El Usuario con el correo [" + usuario.getCorreo() + "] ya existe.");
		}//isPresent
		usuariosRepository.save(usuario);
	}//addUser
	
	
	@Transactional
	public void updateUser(Long idusuarios, String newpassword, String currentpassword) {
		
		usuarios usuario = usuariosRepository.findById(idusuarios).
				orElseThrow(
						()->new IllegalStateException("El Usuario con el id [" + idusuarios + "] no existe."));
		
		
		if(currentpassword == null || newpassword ==null) {
			throw new IllegalStateException("El usuario con el id ["+idusuarios+"] no existe");
		}//ifPassword!=null
		
		if(! SHAUtil.verifyHash(currentpassword, usuario.getPassword())) {
			throw new IllegalStateException("La contraseña del usuario con el id ["+idusuarios+"] no coincide");
		}//ifVerifyHash
		//ValidamosElpasswordActualConElNuevo
		usuario.setPassword(newpassword);
	}//updateUser
	
	
	
	
	
}//usuariosservice
