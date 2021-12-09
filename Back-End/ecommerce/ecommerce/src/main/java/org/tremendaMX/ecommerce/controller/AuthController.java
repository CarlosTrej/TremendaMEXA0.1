package org.tremendaMX.ecommerce.controller;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import javax.servlet.ServletException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tremendaMX.ecommerce.usuariosRepository;
import org.tremendaMX.ecommerce.model.LoginData;
import org.tremendaMX.ecommerce.model.Token;
import org.tremendaMX.ecommerce.model.usuarios;
import org.tremendaMX.utils.SHAUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/api/login")
@CrossOrigin("*")
public class AuthController {
	
	private final usuariosRepository usuariosRepository;

	
	public AuthController(usuariosRepository usuariosRepository) {
		this.usuariosRepository = usuariosRepository;
	}//AuthController
	
	@PostMapping
	public Token login(@RequestBody LoginData data) throws ServletException{
		Optional<usuarios> userByEmail = usuariosRepository.findByEmail(data.getEmail());
		if(userByEmail.isPresent()) {
			if(SHAUtil.verifyHash(data.getPassword(), userByEmail.get().getPassword())) {
				return new Token(generateToken(data.getEmail()));
			}//ifShautil
		}//userByEmail
		throw new ServletException("Login Invalido. por favor verifíca tus credenciales.");
	}//login
	
	private String generateToken(String correo) {
		Calendar calendar = Calendar.getInstance();
        calendar.add( Calendar.HOUR,  10);
        String secret = "this-secret-is-not-very-secret-99";

        return Jwts.builder().setSubject( correo ).claim( "role", "user" )
                .setIssuedAt( new Date() ).setExpiration(calendar.getTime() )
                .signWith( SignatureAlgorithm.HS256, secret ).compact();
	}//generateToken
	
	
	

}//AuthController
