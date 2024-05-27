package com.example.intentphonesms;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class WebActivity extends AppCompatActivity {
    Button btnShowWeb, btnWebBack;
    EditText editTextLink;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web);
        btnShowWeb = findViewById(R.id.btnShowWeb);
        btnWebBack = findViewById(R.id.btnWebBack);
        editTextLink = findViewById(R.id.editTextLink);

        btnShowWeb.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myWebIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://"+editTextLink.getText().toString()));
                startActivity(myWebIntent);
            }
        });

        btnWebBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
}