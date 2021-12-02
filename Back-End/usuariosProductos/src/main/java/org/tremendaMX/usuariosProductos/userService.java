package org.tremendaMX.usuariosProductos;


import java.util.ArrayList;
import java.util.List;

import org.tremendaMX.usuariosProductos.models.users;
import org.springframework.stereotype.Service;

@Service
public class userService {
	
	public final ArrayList<users> lista = new ArrayList<>();

	public userService() {
		super();
		lista.add(new users(1,"Diego","Amador","diegoamadors@hotmail.com","perrote0","5512342312"));
		lista.add(new users(2,"Roberto","Flores","robeflores@hotmail.com","perrote1","5512374625"));
		lista.add(new users(3,"Richard","Archundia","archundiar@hotmail.com","perrote2","5512342312"));
		lista.add(new users(4,"Gustavo","Calderon","calderongus@hotmail.com","perrote3","5512342312"));
		lista.add(new users(5,"Tania","Serrano","serranotan@hotmail.com","perrote4","5512342312"));
		lista.add(new users(6,"Ana","Solis","solisana@hotmail.com","perrote5","5512342312"));
		lista.add(new users(7,"Carlos","Trejo","carlostrejo182@hotmail.com","2718281828","5512342312"));
	}
	
	public List<users> getALLUsers(){
		return lista;
	}//getAllUsers
	
	public users getUser(Long userId) {
		if(userId<= lista.size()) {
			return lista.get((userId.intValue()-1));
		}
		return new users (0, "not name","not last name","not email","not password", "not telephone");
	}//getUser
	
	public boolean deleteUser(Long userId) {
		boolean res =false;
		if(userId<= lista.size()) {
		    lista.remove((userId.intValue()-1));
		    res = true;
		}
		return res;
	}//deleteUser
	
	public void addUser(users user) {
		lista.add(user);
	}//addUser
	
	
	public void updateUser(Long userId,
			String originalcontrasena, 
			String newcontrasena) {
		if(userId<= lista.size()) {
		    users user = lista.get((userId.intValue()-1));
		    if(user.getContrasena().equals(originalcontrasena)) {
		    	user.setContrasena(newcontrasena);
		    }//if original
		}// if userId<=size
	}//updateUser
	
	
	
	
	
	

}//userService
