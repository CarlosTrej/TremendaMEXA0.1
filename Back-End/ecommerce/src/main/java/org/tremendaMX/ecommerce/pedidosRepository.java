package org.tremendaMX.ecommerce;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.tremendaMX.ecommerce.model.pedidos;


public interface pedidosRepository extends JpaRepository<pedidos, Long>{
	@Query("SELECT p FROM pedidos p WHERE p.idpedidos=?1")
	Optional<pedidos> findById(String name);

}//pedidosRepository
