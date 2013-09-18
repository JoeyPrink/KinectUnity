using UnityEngine;
using System.Collections;

public class FollowCamera : MonoBehaviour {
	public GameObject target;
	Vector3 offset;
	// Use this for initialization
	void Start () {
		offset = target.transform.position - transform.position;
	
	}
	
	// Update is called once per frame
	void LateUpdate () {
		transform.position = target.transform.position - offset;
		transform.LookAt(target.transform);
	}
}
