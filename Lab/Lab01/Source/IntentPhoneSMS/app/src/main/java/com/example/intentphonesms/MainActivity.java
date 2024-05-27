package com.example.intentphonesms;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {
    Button btnPhone, btnSMS, btnCamera, btnURL, btnMusic, btnMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btnPhone = findViewById(R.id.btnPhone);
        btnSMS = findViewById(R.id.btnSMS);
        btnCamera = findViewById(R.id.btnCamera);
        btnURL = findViewById(R.id.btnURL);
        btnMusic = findViewById(R.id.btnMusic);
        btnMap = findViewById(R.id.btnMap);

        btnPhone.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntentPhone = new Intent(MainActivity.this, PhoneActivity.class);
                startActivity(myIntentPhone);
            }
        });

        btnSMS.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntentSMS = new Intent(MainActivity.this, SendSMSActivity.class);
                startActivity(myIntentSMS);
            }
        });

        btnCamera.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntentCamera = new Intent(MainActivity.this, CameraActivity.class);
                startActivity(myIntentCamera);
            }
        });

        btnURL.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntentWeb = new Intent(MainActivity.this, WebActivity.class);
                startActivity(myIntentWeb);
            }
        });

        btnMusic.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntentMusic = new Intent(MainActivity.this, MusicActivity.class);
                startActivity(myIntentMusic);
            }
        });

        btnMap.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntentMap = new Intent(MainActivity.this, MapActivity.class);
                startActivity(myIntentMap);
            }
        });
    }
}