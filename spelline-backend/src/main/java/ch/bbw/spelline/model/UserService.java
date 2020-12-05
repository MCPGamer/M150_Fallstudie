package ch.bbw.spelline.model;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;

	public User getUser(int id) {
		return repository.findById(id).get();
	}
	
	public User getUserByEmail(String email) {
		return repository.findByEmail(email);
	}
}
