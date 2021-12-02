package org.tremendaMX.usuariosProductos;

import java.util.ArrayList;
import java.util.List;


import org.springframework.stereotype.Service;
import org.tremendaMX.usuariosProductos.models.products;
@Service
public class productsServices {
	
	public final ArrayList<products> lista = new ArrayList<>();

	public productsServices() {
		super();
		lista.add(new products(1,"Mandil corte de Lujo",2000,
				"S, M, L",
				"Mandil elaborado en piel genuina de res. Cortado, ensamblado y cosido totalmente a mano.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/53354671_579503035870606_6664139277111411912_n_begudt.jpg"));
		lista.add(new products(2,"Mandil corte de Lujo",1600,
				"S, M, L",
				"Mandiles en piel de res hechos completamente a mano.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/138530577_1326582484389676_6441071687567104179_n_wht8me.jpg"));
		lista.add(new products(3,"Mandil corte de Lujo",1600,
				"S, M, L",
				"Corte de lujo en loneta color oro viejo y bolsas color chocolate, aplicaciones desmontables en piel color tabaco, tirantes desmontables y ajustables con estabilizador de cuero hechos a mano.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/75616346_105189720829377_7502509940443354170_n_ew64js.jpg"));
		lista.add(new products(4,"Mandil corte de Lujo",1450,
				"S, M, L",
				"Con tirantes en cuero de res y estabilizador trasero elaborados completamente a mano, etiqueta de cuero personalizada con nombre, ambas desmontables para su mayor cuidado y durabilidad.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636574590/59771119_129001591615867_4798543424333610055_n_kjumpx.jpg"));
		lista.add(new products(5,"Mandil corte Industrial",1350,
				"S, M, L",
				"En loneta sublimada con una hermosa imagen que ella eligió y fondo de mezclilla industrial color negro. Bolsas en piel de res cosidas a mano y etiqueta de cuero de res con su nombre, ambas son desmontables.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636498659/mandil_tremenda_mexa_vrxkcz.png"));
		lista.add(new products(6,"Mandil corte Industrial",1100,
				"S, M, L",
				"Mandil en mezclilla industrial color negro Obsidiana y fondo de gabardina, con bolsa oculta con solapa y detalles en mezclilla color rosa. Con etiqueta de cuero y porta trapos en piel desmontables. Tirantes en cinta textil ajustables con estabilizador trasero hecho a mano.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636498737/Imagen4_efjfjj.png"));
		lista.add(new products(7,"Mandil corte Industrial",1100,
				"S, M, L",
				"Corte básico en mezclilla industrial y bolsas en loneta, con tirantes textiles fijos al mandil, personalizado con logo en etiqueta de cuero desmontable y aplicaciones en piel.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636574591/117581943_135060258267915_7377965767371888466_n_m60usg.jpg"));
		lista.add(new products(8,"Bolsa",300,
				"30x20cm",
				"Realizadas en mezclilla industrial color azul con correas y aplicaciones en piel de res.",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636498751/bolsas_2_e6vu2l.png"));
		lista.add(new products(9,"Bolsa",300,
				"30x20cm",
				"Realizadas en mezclilla industrial color azul índigo, con correas y aplicaciones en piel de res color tabaco, con etiqueta de cuero marcada",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636498649/tx13_hozc9e.png"));
		lista.add(new products(10,"Café Orgánico",180,
				"500grs",
				"Hecho con el mejor café tostado, originario de Chiapas",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/245057633_1452576331790613_1123708741388528244_n_mrncqw.jpg"));
		lista.add(new products(11,"Café Tostado Orgánico",110,
				"500grs",
				"Hecho con el mejor café tostado, originario de Chiapas",
				"https://res.cloudinary.com/rookiesquad/image/upload/v1636499945/253144600_900585757496627_3781751932014693_n_a6lhjy.jpg"));
	}
	
	
	public List<products> getAllProducts(){
		return lista;
	}//getAllProducts
	
	
	public products getProduct(Long productId) {
		if(productId<= lista.size()) {
			return lista.get((productId.intValue()-1));
		}
		return new products (0,"not found",0,"","","");
	}//getProduct
	
	public boolean deleteProduct(Long productId) {
		boolean res = false;
		if(productId<= lista.size()) {
			lista.remove((productId.intValue()-1));
			res = true;
		}
		return res;
	}//deleteProduct
	
	public void addProduct(products product) {
		lista.add(product);
	}//addProduct
	
	public void updateProduct(Long productId,
			String nombre, Double precio,String presentacion, 
			String descripcion, String imagenURL) {
		if(productId<= lista.size()) {
			
			products product = lista.get((productId.intValue()-1));
			product.setNombre(nombre);
			product.setPrecio(precio);
			product.setPresentacion(presentacion);
			product.setDescripcion(descripcion);
			product.setImagenURL(imagenURL);
			
		}//if product<=size
	}//updateProduct
	
	

}//productsServices
