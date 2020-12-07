
package ch.bbw.spelline.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ch.bbw.spelline.model.Request;
import ch.bbw.spelline.model.RequestService;
import ch.bbw.spelline.model.User;
import ch.bbw.spelline.model.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class SpellineController {
	@Autowired
	private RequestService requestService;
	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public Object login(@RequestBody User user) {
		User foundUser = null;
		System.out.println(user.getPassword());
		if (!user.getEmail().isEmpty() && !user.getPassword().isEmpty()) {
			foundUser = userService.getUserByEmail(user.getEmail());
			if (foundUser != null) {
				if (!foundUser.getPassword().equals(user.getPassword())) {
					foundUser = null;
				}
			}
		}

		if (foundUser == null) {
			return "{ \"error\": \"Email or Password is wrong\"}";
		} else {
			return foundUser;
		}
	}

	@PostMapping("/newRequest")
	public Request createRequest(@RequestBody Request request) {
		return requestService.insertRequest(request);
	}
}
