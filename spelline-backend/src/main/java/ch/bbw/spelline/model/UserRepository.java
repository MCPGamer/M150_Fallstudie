package ch.bbw.spelline.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Duarte Goncalves Mendes
 * @version 1.0
 */
@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
	User findByEmail(String email);	
}
