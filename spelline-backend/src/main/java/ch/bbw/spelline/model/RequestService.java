package ch.bbw.spelline.model;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestService {
	@Autowired
	private RequestRepository repository;

	public Request getRequest(int id) {
		return repository.findById(id).get();
	}
}
