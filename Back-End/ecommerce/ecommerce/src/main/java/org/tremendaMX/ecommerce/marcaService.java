package org.tremendaMX.ecommerce;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tremendaMX.ecommerce.model.marca;

@Service
public class marcaService {
	
	private final marcaRepository marcaRepository;

	@Autowired
	public marcaService(marcaRepository marcaRepository) {
		this.marcaRepository = marcaRepository;
	}
	
	public List<marca> getAllbrands(){
		return marcaRepository.findAll();
	}//getAllbrands
	
	public marca getBrand(Long idMarca) {
		return marcaRepository.findById(idMarca).
				orElseThrow(
						()-> new IllegalStateException("La Marca con el id [ "+ idMarca +" ] no existe." ));
	}//getBrand
	
	public void addBrand( marca marca) {
		Optional<marca> prodByName = marcaRepository.findByName(marca.getNombre());
		if(prodByName.isPresent()) {
			throw new IllegalStateException("La marca con el nombre [ " + marca.getNombre() + " ] ya existe.");
		}//ifprodByName
		marcaRepository.save(marca);
	}//addBrand
	
	public void deleteBrand(Long idMarca) {
		if(marcaRepository.existsById(idMarca)) {
			marcaRepository.deleteById(idMarca);
		}else {
			throw new IllegalStateException("La marca con el id [ " + idMarca + " ] no existe.");
		}//else
	}//deleteBrand
	
	@Transactional
	public void updateBrand(Long idMarca, String nombre) {
		marca marca = marcaRepository.findById(idMarca).
				orElseThrow(()-> new IllegalStateException("La marca con el id [ " + idMarca + " ] no existe."));
		
		if(nombre != null)
			if((!nombre.isEmpty()) && (!nombre.equals(marca.getNombre()))){
				marca.setNombre(nombre);
			}//ifNombre
		
	}//updateBrand

}//marcaService
