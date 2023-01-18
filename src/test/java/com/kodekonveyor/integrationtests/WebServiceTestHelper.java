package com.kodekonveyor.integrationtests;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kodekonveyor.webapp.WebappConstants;

public class WebServiceTestHelper {

	private static ObjectMapper mapper;

	static {
		mapper = new ObjectMapper();
	}

	public static Object httpGet(final URL url, final String login,
			final Class<?> klazz)
			throws IOException, JsonParseException, JsonMappingException {
		final Object reply;
		final HttpURLConnection connection = (HttpURLConnection) url
				.openConnection();
		connection
				.setRequestProperty(
						IntegrationtestsConstants.OIDC_CLAIM_NICKNAME,
						login);
		reply = mapper
				.readValue((InputStream) connection.getContent(), klazz);
		return reply;
	}

	public static Object httpPost(final URL url, final String login,
			final Object request, final Class<?> replyClass)
			throws IOException, JsonParseException, JsonMappingException {
		final Object reply;
		final HttpURLConnection connection = (HttpURLConnection) url
				.openConnection();
		connection.setRequestMethod(WebappConstants.POST);
		connection.setRequestProperty(WebappConstants.CONTENT_TYPE,
				WebappConstants.APPLICATION_JSON);
		connection.setRequestProperty(WebappConstants.ACCEPT,
				WebappConstants.APPLICATION_JSON);
		connection.setDoOutput(true);
		connection.setRequestProperty(
				IntegrationtestsConstants.OIDC_CLAIM_NICKNAME,
				login);
		final String requestString = mapper.writeValueAsString(request);
		try (OutputStream outputStream = connection.getOutputStream()) {
			final byte[] requestAsBytes = requestString
					.getBytes(WebappConstants.UTF_8);
			outputStream.write(requestAsBytes, 0, requestAsBytes.length);
		}
		String contentString;
		try (InputStream content = (InputStream) connection.getContent()) {
			contentString = new String(content.readAllBytes());
		}
		reply = mapper
				.readValue(contentString, replyClass);
		return reply;
	}

}
