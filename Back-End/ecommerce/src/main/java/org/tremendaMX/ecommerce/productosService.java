package org.tremendaMX.ecommerce;


import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tremendaMX.ecommerce.model.productos;

@Service
public class productosService {
	
	private final productosRepository productosRepository;
	
	@Autowired
	public productosService(productosRepository productosRepository) {
		this.productosRepository = productosRepository;
	}//constructor
	
	
	public List<productos> getAllProductos(){
		return productosRepository.findAll();
	}//getAllProductos
	
	
	
	
	public productos getProductos(Long id){
		return productosRepository.findById(id)
				.orElseThrow(()-> new IllegalStateException
						("El producto con el id [" + id + "] no existe."));
	}//getProductos
	
	public void deleteProductos(Long id) {
		if(productosRepository.existsById(id)) {
			productosRepository.deleteById(id);
		}else {
			throw new IllegalStateException("El producto con el id [" + id + "] no existe. ");
		}//else
	}//deleteProductos
	
	public void addProductos (productos producto) {
		Optional<productos> prodByName=productosRepository.findByName(producto.getNombre());
		if( prodByName.isPresent()) {
			throw new IllegalStateException("El Producto con el nombre [" + producto.getNombre() + "] ya existe.");
		}//isPresent
		productosRepository.save(producto);
	}//addProducts
	
	
	@Transactional
	public void updateProductos(Long id,String nombre, double precio, String descripcion,
			String presentacion, String img, Long categorias_idcategorias, Long marca_idmarca) {
		
		productos producto = productosRepository.findById(id).
				orElseThrow(
						()-> new IllegalStateException("El producto con el id [" + id + "] no existe."));
		
		//validamos_nombre
		if(nombre != null)
			if((!nombre.isEmpty()) && (!nombre.equals(producto.getNombre()))) {
				producto.setNombre(nombre);
			}//ifNombre
		
		//validamos_precio
		if((precio >0) && (precio != producto.getPrecio())) {
			producto.setPrecio(precio);
		}//ifPrecio
		
		//validamos_descripcion
		if(descripcion != null)
			if( (!descripcion.isEmpty())&&(!descripcion.equals(producto.getDescripcion()))){
				producto.setDescripcion(descripcion);
			}//ifDescripcion
		
		//validamos_presentacion
		if(presentacion != null)
			if( (!presentacion.isEmpty())&&(!presentacion.equals(producto.getPresentacion()))){
				producto.setPresentacion(presentacion);
			}//ifPresentacion
		
		//validamos_imagen
		if(img != null)
			if( (!img.isEmpty())&&(!img.equals(producto.getImg()))){
				producto.setImg(img);
			}//ifImg
		
		//validamos_FK_categoria_del_producto
		if(categorias_idcategorias != null)
			if((categorias_idcategorias > 0) && (categorias_idcategorias != producto.getCategorias_idcategorias())) {
				producto.setCategorias_idcategorias(categorias_idcategorias);	
			}//ifCategorias_idcategorias
		
		//validamos_FK_
		if(marca_idmarca != null)
			if((marca_idmarca > 0) && (marca_idmarca != producto.getMarca_idmarca())) {
				producto.setMarca_idmarca(marca_idmarca);
			}//ifmarca_idmarca
		
	}//updateProductos

}//roductossService
