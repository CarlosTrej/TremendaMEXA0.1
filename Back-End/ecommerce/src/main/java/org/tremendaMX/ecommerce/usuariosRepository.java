package org.tremendaMX.ecommerce;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.tremendaMX.ecommerce.model.usuarios;

public interface usuariosRepository extends JpaRepository<usuarios, Long>{
	@Query("SELECT p FROM usuarios p WHERE p.nombre=?1")
	Optional<usuarios> findByName(String name);
}//interface usuariosRepository


