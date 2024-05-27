package com.example.intentphonesms;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class SendSMSActivity extends AppCompatActivity {
    EditText editSMS;
    Button btnSend, btnSMSBack;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_send_smsactivity);
        editSMS = findViewById(R.id.editSMS);
        btnSend = findViewById(R.id.btnSend);
        btnSMSBack = findViewById(R.id.btnSMSBack);

        btnSend.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mySMSIntent = new Intent(Intent.ACTION_SENDTO, Uri.parse("smsto:" + editSMS.getText().toString()));
                startActivity(mySMSIntent);
            }
        });

        btnSMSBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
}