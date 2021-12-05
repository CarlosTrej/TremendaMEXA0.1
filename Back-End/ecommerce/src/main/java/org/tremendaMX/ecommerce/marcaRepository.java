package org.tremendaMX.ecommerce;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.tremendaMX.ecommerce.model.marca;

public interface marcaRepository extends JpaRepository<marca, Long>{

	@Query("SELECT p FROM marca p WHERE p.nombre=?1")
	Optional<marca> findByName(String name);
	
}//marcaRepository
