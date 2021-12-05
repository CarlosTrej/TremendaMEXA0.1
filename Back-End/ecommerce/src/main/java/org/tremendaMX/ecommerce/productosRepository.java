package org.tremendaMX.ecommerce;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.tremendaMX.ecommerce.model.productos;

public interface productosRepository extends JpaRepository<productos, Long> {
	@Query("SELECT p FROM productos p WHERE p.nombre=?1")
	Optional<productos> findByName(String name);
}//interface productosRepository
