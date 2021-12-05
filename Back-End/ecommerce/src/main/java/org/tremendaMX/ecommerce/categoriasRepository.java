package org.tremendaMX.ecommerce;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.tremendaMX.ecommerce.model.categorias;

public interface categoriasRepository extends JpaRepository<categorias, Long>{
	@Query("SELECT p FROM categorias p WHERE p.nombre=?1")
	Optional<categorias> FindByName(String name);
}//categoriasRepository
