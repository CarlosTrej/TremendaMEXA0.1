package org.tremendaMX.ecommerce;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tremendaMX.ecommerce.model.categorias;

@Service
public class categoriasService {
	
	private final categoriasRepository categoriasRepository;

	@Autowired
	public categoriasService(categoriasRepository categoriasRepository) {
		this.categoriasRepository = categoriasRepository;
	}//categoriasService
	
	public List<categorias> getAllcategories(){
		return categoriasRepository.findAll();
	}//getAllcategories
	
	public categorias getCategory(Long id) {
		return categoriasRepository.findById(id).
				orElseThrow(()-> new IllegalStateException("La categoria con el id [ " + id + " ] no existe"));
	}//getCategory
	
	public void addCategory(categorias categoria) {
		Optional<categorias> prodByName = categoriasRepository.FindByName(categoria.getNombre());
		if(prodByName.isPresent()) {
			throw new IllegalStateException("La categoría con el nombre [ " + categoria.getNombre() + " ] ya existe.");
		}//ifProdByName
		categoriasRepository.save(categoria);
	}//addCategory
	
	public void deleteCategory (Long id) {
		if(categoriasRepository.existsById(id)) {
			categoriasRepository.deleteById(id);
		}else {
			throw new IllegalStateException("La categoría con el id [ " + id + "] no existe.");
		}//else
	}//deleteCategory
	
	@Transactional
	public void updateCategory(Long id, String nombre, String descripcion) {
		categorias categoria = categoriasRepository.findById(id)
				.orElseThrow(()-> new IllegalStateException("La categoria con el id [ " + id + " ] no existe."));
		
		//ValidamosNombre
		if(nombre != null)
			if((!nombre.isEmpty()) && (!nombre.equals(categoria.getNombre()))) {
				categoria.setNombre(nombre);
			}//ifNombre
		
		//ValidamosDescripcion
		if(descripcion != null)
			if((!descripcion.isEmpty()) && (!descripcion.equals(categoria.getDescripcion()))) {
				categoria.setDescripcion(descripcion);
			}//ifDescripcion	
	}//updateCategory

}//categoriasService
