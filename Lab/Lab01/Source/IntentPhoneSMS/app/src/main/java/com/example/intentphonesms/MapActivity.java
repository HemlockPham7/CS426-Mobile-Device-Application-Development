package com.example.intentphonesms;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MapActivity extends AppCompatActivity {
    Button btnMapBack, btnPin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_map);
        btnMapBack = findViewById(R.id.btnMapBack);
        btnPin = findViewById(R.id.btnPin);

        String latitudeOne = "10.7705039";
        String longitudeOne = "106.6638173";

        btnPin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                pinLocationMap(latitudeOne, longitudeOne);
            }
        });

        btnMapBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }

    private void pinLocationMap(String latitude, String longitude) {
        Uri mapUri = Uri.parse("https://www.google.com/maps/search/"+latitude+","+longitude);
        Intent myIntentMap = new Intent(Intent.ACTION_VIEW, mapUri);
        startActivity(myIntentMap);
    }
}