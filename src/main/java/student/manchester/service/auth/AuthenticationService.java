package student.manchester.service.auth;

import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.model.auth.bean.UserDTO; /**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
public interface AuthenthicationService {

    AuthenticatedResponse createResponse(UserDTO user);
}
