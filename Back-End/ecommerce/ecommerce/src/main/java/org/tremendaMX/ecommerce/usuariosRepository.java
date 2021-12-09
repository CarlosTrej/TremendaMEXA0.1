package org.tremendaMX.ecommerce;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.tremendaMX.ecommerce.model.usuarios;

@Repository
public interface usuariosRepository extends JpaRepository<usuarios, Long>{
	
	@Query("SELECT u FROM usuarios u WHERE u.correo=?1")
	Optional<usuarios> findByEmail(String correo);
	
}//interface usuariosRepository


