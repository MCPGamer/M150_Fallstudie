package ch.bbw.spelline.model;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Duarte Goncalves Mendes
 * @version 1.0
 */
public interface UserRepository extends CrudRepository<User, Integer>{
	User findByEmail(String email);	
}
